if (data.cmd === 'login'){
    // Check if email exists 
    User.findOne({email: data.email}).then((r) => {
        // If email doesn't exists it will return null
        if (r != null){
            const hash = crypto.createHash("md5")
            // Hash password to md5
            let hexPwd = hash.update(data.hashcode).digest('hex');
            // Check if password is correct
            if (hexPwd == r.password) {
                // Send username to user and status code is succes.
                var loginData = '{"username":"'+r.username+'","status":"succes"}';
                // Send data back to user
                ws.send(loginData);
            } else{
                // Send error
                var loginData = '{"cmd":"'+data.cmd+'","status":"wrong_pass"}';
                ws.send(loginData);
            }
        } else{
            // Send error
            var loginData = '{"cmd":"'+data.cmd+'","status":"wrong_mail"}';
            ws.send(loginData);
        }
    });
} 