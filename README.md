# Replit_JsForever
A Javascript file that make Replit online forever with `kill 1` command.
This script does not need monitor, but you can monitor to make sure it's still alive, check the `#Monitor` below

# UPDATE
> [!NOTE]  
> New update does not need monitor, you can use monitor to track if it's still alive.

# How to use?
1. Drag `jsForever.js` file to your Replit project.
2. Add this
  ```javascript
  require("./jsForever.js")();
  ```
to the first line of your main javascript file.

If you put it in another folder just change the `./jsForever.js` to your file path

3. Add enviroment variable named "host_url_jsForever", and set the value to "https://{yourReplitProjectName}.{yourReplitUserName}.repl.co/"
> [!NOTE]  
> {yourReplitProjectName}: Your replit project name, for example: "https://replit.com/@user/ProjectName", your project name is "ProjectName" in the url, and after the "@user"
> {yourReplitUserName}: Your replit username on your account, for example: "https://replit.com/@user/ProjectName", your username is the "@user", remember to remove the "@"

4. Done!

# Minimized
Check out `jsForever_nonMinimized.js`, for the non minimized version.
`jsForever.js` always minimized.

# Why it need the `kill 1` command?
Replit have a limitation, if it reached or over the limit. Your project **may** not work (like **Discord bot**), but it's still online.

# Monitor
Some good monitor services you should try:
- Uptimerbot: https://uptimerobot.com/
- StackMonitor: https://stackmonitor.io/
- uptime-kuma: https://github.com/louislam/uptime-kuma
