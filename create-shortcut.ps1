$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("$Home\Desktop\Warhammer Clicker.lnk")
$Shortcut.TargetPath = "$PSScriptRoot\run-warhammer.bat"
$Shortcut.WorkingDirectory = "$PSScriptRoot"
$Shortcut.Description = "Run Warhammer Auto Clicker"
$Shortcut.HotKey = "CTRL+ALT+W"
$Shortcut.Save() 