if (data.cmd === 'signup'){ // On Signup
    // If mail doesn't exists it will return null
    User.findOne({email: data.email}).then((mail) => {
        // Check if email doesn't exist.
        if (mail == null){
            User.findOne({username: data.username}).then((user) => {
                    // Check if username doesn't exists.
                    if (user == null){
                        const hash = crypto.createHash("md5")
                        let hexPwd = hash.update(data.hash).digest('hex');
                        var signupData = "{'cmd':'"+data.cmd+"','status':'succes'}";
                        const user = new User({
                            email: data.email,
                            username: data.username,
                            password: hexPwd,
                        });
                        // Insert new user in db
                        user.save();
                        // Send info to user
                        ws.send(signupData);
                } else{
                    // Send error message to user.
                    var signupData = "{'cmd':'"+data.cmd+"','status':'user_exists'}";  
                    ws.send(signupData);  
                }
            });
        } else{
            // Send error message to user.
            var signupData = "{'cmd':'"+data.cmd+"','status':'mail_exists'}";    
            ws.send(signupData);
        }
    });
}