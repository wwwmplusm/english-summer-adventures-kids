function doPost(e) {
  try {
    // 1. Получение листа "Заявки"
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Заявки"); 

    // 2. Проверка, существует ли лист. Если нет, создаем его и добавляем заголовки.
    if (!sheet) { 
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet("Заявки");
      // Устанавливаем заголовки для обеих форм
      sheet.appendRow([
        "timestamp", 
        "formType", 
        "parentName", 
        "childName", 
        "childAge", 
        "grade", 
        "phone", 
        "email", 
        "contactMethod", 
        "privacyAgreement", 
        "message"
      ]);
    }
    
    // 3. Логирование входящих данных
    Logger.log("=== НОВЫЙ POST ЗАПРОС ===");
    Logger.log("Content-Type: " + (e.postData ? e.postData.type : "нет postData"));
    Logger.log("Тело запроса: " + (e.postData ? e.postData.contents : "нет contents"));
    Logger.log("Параметры: " + JSON.stringify(e.parameter || {}));
    
    var data;
    var formType = "unknown";
    
    // 4. Парсинг данных из запроса
    try {
      if (e.postData && e.postData.contents) {
        // JSON данные
        data = JSON.parse(e.postData.contents);
        Logger.log("Успешно распаршен JSON: " + JSON.stringify(data));
      } else if (e.parameter && Object.keys(e.parameter).length > 0) {
        // FormData параметры
        data = e.parameter;
        Logger.log("Получены параметры FormData: " + JSON.stringify(data));
        
        // Преобразуем строковые boolean в настоящие boolean
        if (data.privacyAgreement) {
          data.privacyAgreement = data.privacyAgreement === 'true' || data.privacyAgreement === true;
        }
      } else {
        Logger.log("Нет данных в запросе");
        Logger.log("e.postData: " + JSON.stringify(e.postData || {}));
        Logger.log("e.parameter: " + JSON.stringify(e.parameter || {}));
        return ContentService.createTextOutput(JSON.stringify({ 
          "result": "error", 
          "error": "No data received",
          "debug": {
            "hasPostData": !!e.postData,
            "hasParameter": !!e.parameter,
            "postDataType": e.postData ? e.postData.type : null
          },
          "timestamp": new Date().toISOString()
        }))
        .setMimeType(ContentService.MimeType.JSON)
        .setHeaders({
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        });
      }
    } catch (jsonParseError) {
      Logger.log("Ошибка парсинга JSON: " + jsonParseError.toString());
      return ContentService.createTextOutput(JSON.stringify({ 
        "result": "error", 
        "error": "Invalid JSON data", 
        "details": jsonParseError.toString(),
        "received": e.postData ? e.postData.contents : "no postData",
        "timestamp": new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });
    }

    // 5. Определение типа формы по наличию полей
    if (data.hasOwnProperty('contactMethod') && data.hasOwnProperty('grade')) {
      formType = "diagnostic";
    } else if (data.hasOwnProperty('email') && data.hasOwnProperty('childName')) {
      formType = "contact";
    } else {
      formType = "partial";
    }

    Logger.log("Определен тип формы: " + formType);

    // 6. Функция безопасного получения значения
    function getSafeValue(value, defaultValue) {
      if (value === null || value === undefined) {
        return defaultValue || "";
      }
      if (typeof value === 'string') {
        return value.trim();
      }
      return String(value);
    }

    // 7. Формирование новой строки с проверкой наличия полей
    var newRow = [
      new Date(), // timestamp
      formType,   // formType
      getSafeValue(data.parentName, ""),
      getSafeValue(data.childName, ""),
      getSafeValue(data.childAge, ""),
      getSafeValue(data.grade, ""),
      getSafeValue(data.phone, ""),
      getSafeValue(data.email, ""),
      getSafeValue(data.contactMethod, ""),
      data.privacyAgreement === true || data.privacyAgreement === "true" ? true : false,
      getSafeValue(data.message, "")
    ];

    Logger.log("Подготовленная строка для добавления: " + JSON.stringify(newRow));

    // 8. Добавление строки в таблицу
    sheet.appendRow(newRow);
    Logger.log("Строка успешно добавлена в таблицу");

    // 9. Возвращение успешного ответа с CORS заголовками
    var responseData = { 
      "result": "success", 
      "formType": formType,
      "receivedData": data,
      "timestamp": new Date().toISOString()
    };
    
    Logger.log("Отправляем успешный ответ: " + JSON.stringify(responseData));
    
    return ContentService.createTextOutput(JSON.stringify(responseData))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      });

  } catch (error) {
    // 10. Обработка общих ошибок и логирование
    var errorMsg = "Общая ошибка в doPost: " + error.toString();
    if (error.stack) {
      errorMsg += " Stack: " + error.stack;
    }
    Logger.log(errorMsg);
    
    return ContentService.createTextOutput(JSON.stringify({ 
      "result": "error", 
      "error": error.toString(),
      "timestamp": new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
  }
}

// Обработка OPTIONS запросов для preflight CORS
function doOptions(e) {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
}

// Функция для тестирования (можно вызвать вручную)
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        parentName: "Тест Родитель",
        childAge: "9",
        grade: "3кл",
        phone: "+7 (999) 123-45-67",
        contactMethod: "telegram",
        privacyAgreement: true
      }),
      type: "application/json"
    }
  };
  
  var result = doPost(testData);
  Logger.log("Результат теста: " + result.getContent());
}

// Функция для тестирования с FormData
function testDoPostFormData() {
  var testData = {
    parameter: {
      parentName: "Тест FormData",
      childAge: "10",
      grade: "4кл", 
      phone: "+7 (888) 777-66-55",
      contactMethod: "whatsapp",
      privacyAgreement: "true"
    }
  };
  
  var result = doPost(testData);
  Logger.log("Результат теста FormData: " + result.getContent());
}

// Функция для очистки дублированных записей
function cleanDuplicates() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Заявки");
  if (!sheet) return;
  
  var data = sheet.getDataRange().getValues();
  var uniqueRows = [];
  var seen = new Set();
  
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    var key = row[2] + "|" + row[4] + "|" + row[6]; // parentName + childAge + phone
    
    if (i === 0 || !seen.has(key)) {
      uniqueRows.push(row);
      seen.add(key);
    }
  }
  
  if (uniqueRows.length < data.length) {
    sheet.clear();
    sheet.getRange(1, 1, uniqueRows.length, uniqueRows[0].length).setValues(uniqueRows);
    Logger.log("Удалено " + (data.length - uniqueRows.length) + " дубликатов");
  }
} 