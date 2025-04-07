var x = document.getElementById('login');
        var y = document.getElementById('register');
        var z = document.getElementById('btn');
        function login(){
            x.style.left = "27px";
            y.style.right = "-350px";
            z.style.left = "0px";
        }
        function register(){
            x.style.left = "-350px";
            y.style.right = "25px";
            z.style.left = "150px";
        }

        function myLogPassword(){
         var a = document.getElementById("logPassword");
         var b = document.getElementById("eye-1");
         var c = document.getElementById("eye-slash-1");
         if(a.type === "password"){
            a.type = "text";
            b.style.opacity = "1";
            c.style.opacity = "0";
         }else{
            a.type = "password";
            b.style.opacity = "0";
            c.style.opacity = "1";
         }
        }

        function myRegPassword() {
          var d = document.getElementById("regPassword");
          var b = document.getElementById("eye-3");
          var c = document.getElementById("eye-slash-3");
        
          if (d.type === "password") {
            d.type = "text";
            b.style.opacity = "1";
            c.style.opacity = "0";
          } else {
            d.type = "password";
            b.style.opacity = "0";
            c.style.opacity = "1";
          }
        }
      
        function myRegConfirmPassword() {
          var d = document.getElementById("regConfirmPassword");
          var b = document.getElementById("eye-4");
          var c = document.getElementById("eye-slash-4");
        
          if (d.type === "password") {
            d.type = "text";
            b.style.opacity = "1";
            c.style.opacity = "0";
          } else {
            d.type = "password";
            b.style.opacity = "0";
            c.style.opacity = "1";
          }
        }