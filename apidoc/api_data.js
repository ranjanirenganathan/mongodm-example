define({ "api": [  {    "type": "post",    "url": "/message",    "title": "Create Message",    "name": "Create",    "group": "Message",    "version": "0.0.1",    "description": "<p>Create a new message with the specified, required fields.</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Object</p> ",            "optional": false,            "field": "message",            "description": "<p>The message object with all required fields</p> "          },          {            "group": "Parameter",            "type": "<p>String(ObjectID)</p> ",            "optional": false,            "field": "message.sender",            "description": "<p>The objectID of the sender (user)</p> "          },          {            "group": "Parameter",            "type": "<p>Array(String(ObjectID))</p> ",            "optional": false,            "field": "message.receiver",            "description": "<p>List containing objectIDs for all receivers (users)</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "message.text",            "description": "<p>Message content</p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "message",            "description": "<p>The message object which was created (unpopulated).</p> "          }        ]      },      "examples": [        {          "title": "Success-Response",          "content": "   HTTP/1.1 201 Created\n   {\n  \"message\": {\n    \"id\": \"571101e7e5feae48d8000001\",\n    \"createdAt\": \"2016-04-15T16:59:51.97721049+02:00\",\n    \"updatedAt\": \"2016-04-15T16:59:51.97721049+02:00\",\n    \"sender\": \"564ca693e5feae2532000002\",\n    \"receiver\": [\n      \"564ca693e5feae2532000002\"\n    ],\n    \"text\": \"Some message..\"\n  }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NotWrapped",            "description": "<p>The message attributes were not wrapped in a message object (key)</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "MissingInvalidFields",            "description": "<p>Some of the required fields are missing or invalid</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Some server problems occured.</p> "          }        ]      },      "examples": [        {          "title": "Object not wrapped in typename",          "content": "{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"Bad Request\",\n    \"userInfo\": [\n      {\n        \"message\": \"object not wrapped in typename\"\n      }\n    ]\n  }\n}",          "type": "json"        },        {          "title": "Missing or invalid fields",          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"code\": 400,\n    \"message\": \"Bad Request\",\n    \"userInfo\": [\n      {\n        \"message\": \"Field 'sender' is required.\"\n      },\n      {\n        \"message\": \"Field 'receiver' is required.\"\n      },\n      {\n        \"message\": \"Field 'text' is required.\"\n      }\n    ]\n  }\n}",          "type": "json"        },        {          "title": "Internal Server Error",          "content": "HTTP/1.1 500 Internal Server Error\n{\n     \"error\": {\n         \"code\": 500,\n         \"message\": \"Internal Server Error\"\n     }\n }",          "type": "json"        }      ]    },    "filename": "./controllers/message.go",    "groupTitle": "Message"  },  {    "type": "get",    "url": "/message",    "title": "Get All",    "name": "Index",    "group": "Message",    "version": "0.0.1",    "description": "<p>Fetches all messages</p> ",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Array(Message)</p> ",            "optional": false,            "field": "messages",            "description": "<p>The array of all messages</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "message.id",            "description": "<p>User ID</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "message.createdAt",            "description": "<p>Timestamp of first creation</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "message.updatedAt",            "description": "<p>Timestamp of last update</p> "          },          {            "group": "Success 200",            "type": "<p>User</p> ",            "optional": false,            "field": "message.sender",            "description": "<p>User object of sender</p> "          },          {            "group": "Success 200",            "type": "<p>Array(User)</p> ",            "optional": false,            "field": "message.receiver",            "description": "<p>List of user objects (receiver)</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "message.text",            "description": "<p>Message content</p> "          },          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "pagination",            "description": "<p>The pagination object</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "pagination.first",            "description": "<p>Path to first page including other params</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "pagination.last",            "description": "<p>Path to last page including other params</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "pagination.previous",            "description": "<p>Path to previous page</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "pagination.next",            "description": "<p>Path to next page</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "pagination.totalRecords",            "description": "<p>All records on all pages</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "pagination.limit",            "description": "<p>Records on the current page</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "pagination.pages",            "description": "<p>Amount of all pages</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "pagination.currentPage",            "description": "<p>Number of the current page</p> "          }        ]      },      "examples": [        {          "title": "Success-Response",          "content": "   HTTP/1.1 201 Created\n   {\n  \"messages\": [\n    {\n      \"id\": \"564ca693e5feae2532000002\",\n      \"createdAt\": \"2015-11-18T17:25:55.052+01:00\",\n      \"updatedAt\": \"2015-11-18T17:25:55.052+01:00\",\n      \"sender\": {\n        \"id\": \"564c87e1e5feae0e3a000001\",\n        \"createdAt\": \"2015-11-18T15:14:57.081+01:00\",\n        \"updatedAt\": \"2015-11-18T15:14:57.081+01:00\",\n        \"firstname\": \"Bob\",\n        \"lastname\": \"Marley\",\n        \"username\": \"\",\n        \"email\": \"bob@marley.de\",\n        \"address\": {\n          \"street\": \"Musterstraße 12\",\n          \"city\": \"Erfurt\",\n          \"zip\": 99085\n        }\n      },\n      \"receiver\": [\n        {\n          \"id\": \"564b3879e5feaed231000002\",\n          \"createdAt\": \"2015-11-17T15:23:53.439+01:00\",\n          \"updatedAt\": \"2015-11-17T15:23:53.439+01:00\",\n          \"firstname\": \"Bob\",\n          \"lastname\": \"Marley\",\n          \"username\": \"\",\n          \"email\": \"bob@marley.de\",\n          \"address\": {\n            \"street\": \"Musterstraße 12\",\n            \"city\": \"Erfurt\",\n            \"zip\": 99085\n          }\n        },\n        {\n          \"id\": \"564c87e1e5feae0e3a000001\",\n          \"createdAt\": \"2015-11-18T15:14:57.081+01:00\",\n          \"updatedAt\": \"2015-11-18T15:14:57.081+01:00\",\n          \"firstname\": \"Bob\",\n          \"lastname\": \"Marley\",\n          \"username\": \"\",\n          \"email\": \"bob@marley.de\",\n          \"address\": {\n            \"street\": \"Musterstraße 12\",\n            \"city\": \"Erfurt\",\n            \"zip\": 99085\n          }\n        }\n      ],\n      \"text\": \"Hello!\"\n    }\n  ],\n  \"pagination\": {\n    \"first\": \"/api/message?limit=1&skip=0\",\n    \"last\": \"/api/message?limit=1&skip=19\",\n    \"previous\": \"\",\n    \"next\": \"/api/message?limit=1&skip=1\",\n    \"totalRecords\": 20,\n    \"limit\": 1,\n    \"pages\": 20,\n    \"currentPage\": 1\n  }\n}",          "type": "json"        }      ]    },    "filename": "./controllers/message.go",    "groupTitle": "Message",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Some server problems occured.</p> "          }        ]      },      "examples": [        {          "title": "Internal Server Error",          "content": "HTTP/1.1 500 Internal Server Error\n{\n     \"error\": {\n         \"code\": 500,\n         \"message\": \"Internal Server Error\"\n     }\n }",          "type": "json"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": true,            "field": "skip",            "defaultValue": "0",            "description": "<p>The offset to start with searching</p> "          },          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": true,            "field": "limit",            "defaultValue": "10",            "description": "<p>Maximum records for one page</p> "          }        ]      }    }  },  {    "type": "post",    "url": "/user",    "title": "Create User",    "name": "Create",    "group": "User",    "version": "0.0.1",    "description": "<p>Create a new user with the specified, required fields.</p> ",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Object</p> ",            "optional": false,            "field": "user",            "description": "<p>The user object with all required fields</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "user.email",            "description": "<p>Users the email (used for login) <code>validation: email</code></p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "user.firstname",            "description": "<p>Users firstname <code>minLen: 2 maxLen: 30</code></p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "user.lastname",            "description": "<p>Users lastname <code>minLen: 2 maxLen: 30</code></p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": true,            "field": "user.username",            "description": "<p>Users nickname <code>minLen: 2 maxLen: 15</code></p> "          },          {            "group": "Parameter",            "type": "<p>Address</p> ",            "optional": true,            "field": "address",            "description": "<p>User address object</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": true,            "field": "address.street",            "description": "<p>Street and Number</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": true,            "field": "address.city",            "description": "<p>City</p> "          },          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": true,            "field": "address.zip",            "description": "<p>Zipcode</p> "          },          {            "group": "Parameter",            "type": "<p>String</p> ",            "optional": false,            "field": "password",            "description": "<p>The user password as plain text <code>minLen: 8 maxLen: 50</code></p> "          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "user",            "description": "<p>The user object which was created.</p> "          }        ]      },      "examples": [        {          "title": "Success-Response",          "content": "   HTTP/1.1 201 Created\n   {\n\t   \"user\": {\n\t     \"id\": \"5710ed60e5feae376f000001\",\n\t     \"createdAt\": \"2016-04-15T15:32:16.670823736+02:00\",\n\t     \"updatedAt\": \"2016-04-15T15:32:16.670823736+02:00\",\n\t     \"firstname\": \"Max\",\n\t     \"lastname\": \"Mustermann\",\n\t     \"username\": \"\",\n\t     \"email\": \"test@test.de\",\n\t     \"address\": null\n\t   }\n\t }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "MissingInvalidFields",            "description": "<p>Some of the required fields are missing or invalid</p> "          },          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Some server problems occured.</p> "          }        ]      },      "examples": [        {          "title": "Missing or invalid fields",          "content": "HTTP/1.1 400 Bad Request\n{\n \"error\": {\n   \"code\": 400,\n   \"message\": \"Bad Request\",\n   \"userInfo\": [\n     {\n       \"message\": \"Field 'firstname' is required.\"\n     },\n     {\n       \"message\": \"Field 'lastname' is required.\"\n     },\n     {\n       \"message\": \"Field 'email' is required.\"\n     },\n     {\n       \"message\": \"Field 'password' is required.\"\n     }\n   ]\n }\n}",          "type": "json"        },        {          "title": "Internal Server Error",          "content": "HTTP/1.1 500 Internal Server Error\n{\n     \"error\": {\n         \"code\": 500,\n         \"message\": \"Internal Server Error\"\n     }\n }",          "type": "json"        }      ]    },    "filename": "./controllers/user.go",    "groupTitle": "User"  },  {    "type": "get",    "url": "/user",    "title": "Get All",    "name": "Index",    "group": "User",    "version": "0.0.1",    "description": "<p>Fetches all users</p> ",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "<p>Array(User)</p> ",            "optional": false,            "field": "users",            "description": "<p>The array of all users</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "users.id",            "description": "<p>User ID</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "users.createdAt",            "description": "<p>Timestamp of first creation</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "users.updatedAt",            "description": "<p>Timestamp of last update</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "users.firstname",            "description": "<p>Firstname</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "users.lastname",            "description": "<p>Lastname</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "users.username",            "description": "<p>Username</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "users.email",            "description": "<p>Email</p> "          },          {            "group": "Success 200",            "type": "<p>Address</p> ",            "optional": false,            "field": "address",            "description": "<p>User address object</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "address.street",            "description": "<p>Street and Number</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "address.city",            "description": "<p>City</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "address.zip",            "description": "<p>Zipcode</p> "          },          {            "group": "Success 200",            "type": "<p>Object</p> ",            "optional": false,            "field": "pagination",            "description": "<p>The pagination object</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "pagination.first",            "description": "<p>Path to first page including other params</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "pagination.last",            "description": "<p>Path to last page including other params</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "pagination.previous",            "description": "<p>Path to previous page</p> "          },          {            "group": "Success 200",            "type": "<p>String</p> ",            "optional": false,            "field": "pagination.next",            "description": "<p>Path to next page</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "pagination.totalRecords",            "description": "<p>All records on all pages</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "pagination.limit",            "description": "<p>Records on the current page</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "pagination.pages",            "description": "<p>Amount of all pages</p> "          },          {            "group": "Success 200",            "type": "<p>Number</p> ",            "optional": false,            "field": "pagination.currentPage",            "description": "<p>Number of the current page</p> "          }        ]      },      "examples": [        {          "title": "Success-Response",          "content": "   HTTP/1.1 201 Created\n   {\n         \"pagination\": {\n             \"first\": \"/api/v1/users?skip=0&limit=10\",\n             \"last\": \"/api/v1/users?skip=0&limit=2\",\n             \"previous\": \"\",\n             \"next\": \"\",\n             \"totalRecords\": 2,\n             \"limit\": 10,\n             \"pages\": 1,\n             \"currentPage\": 1\n         },\n         \"users\": [\n             {\n                 \"id\": \"55e961ab113c61d6d3000001\",\n                 \"createdAt\": \"2015-09-04T11:17:31.219+02:00\",\n                 \"updatedAt\": \"2015-09-08T16:35:44.484+02:00\",\n                 \"firstname\": \"Max\",\n                 \"lastname\": \"Mustermann\",\n                 \"username\": \"zebresel_admin\",\n                 \"email\": \"admin@zebresel.com\",\n                 \"address\": {\n\t\t\t\t        \"street\": \"Musterstraße 12\",\n\t\t\t\t        \"city\": \"Erfurt\",\n\t\t\t\t        \"zip\": 99085\n\t\t\t\t    }\n             },\n             {\n                 \"id\": \"55e9621d113c61d6d3000002\",\n                 \"createdAt\": \"2015-09-04T11:19:25.83+02:00\",\n                 \"updatedAt\": \"2015-09-04T11:19:25.83+02:00\",\n                 \"firstname\": \"Max\",\n                 \"lastname\": \"Musterfrau\",\n                 \"username\": \"moehlone\",\n                 \"email\": \"hello@zebresel.com\",\n                 \"address\": {\n\t\t\t\t        \"street\": \"Musterstraße 12\",\n\t\t\t\t        \"city\": \"Erfurt\",\n\t\t\t\t        \"zip\": 99085\n\t\t\t\t    }\n             }\n         ]\n     }",          "type": "json"        }      ]    },    "filename": "./controllers/user.go",    "groupTitle": "User",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "InternalServerError",            "description": "<p>Some server problems occured.</p> "          }        ]      },      "examples": [        {          "title": "Internal Server Error",          "content": "HTTP/1.1 500 Internal Server Error\n{\n     \"error\": {\n         \"code\": 500,\n         \"message\": \"Internal Server Error\"\n     }\n }",          "type": "json"        }      ]    },    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": true,            "field": "skip",            "defaultValue": "0",            "description": "<p>The offset to start with searching</p> "          },          {            "group": "Parameter",            "type": "<p>Number</p> ",            "optional": true,            "field": "limit",            "defaultValue": "10",            "description": "<p>Maximum records for one page</p> "          }        ]      }    }  }] });