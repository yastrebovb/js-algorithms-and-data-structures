const truthCheck = (collection, pre) => collection.every((obj) => obj.hasOwnProperty(pre) && obj[pre]);

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"); // returns true
