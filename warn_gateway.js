var domains = [

];

var current = document.domain;
var warn = true;

for (i = 0; i < domains.length; i++) {
      if (atob(domains[i]).trim() == current) {
            warn = false;
            break;
      }
}

if (warn) {
      document.getElementById('warning').innerHTML += '<br><b><center><font color="red">YOU ARE NOT USING ONE OF OUR DOMAINS!</b></font> CLICK <a href=https://' + atob(domains[0]) + '>HERE</a> TO USE THE RIGHT ONE.';
}
