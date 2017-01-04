<!-- Trouvez le mot de passe :
http://3wa.local/PHP/PHP4/exo_prepa_qcm/third.php
validez à cette addresse via la variable get pass :
http://3wa.local/PHP/PHP4/exo_prepa_qcm/third_validation.php -->

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Exo</title>
        <script src="https://code.jquery.com/jquery-3.1.0.js" integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk=" crossorigin="anonymous"></script>
    </head>
    <body>

        <script type="text/javascript">

						var password = "4d4a114028d1d12101c5c7724a83544c7c6ca05b55aac3e8f228b05f0ed2a1117eabbdb6b4d0c7e1af09d006c720a4e7cffd5117df8485466eaf30f4034e4dbd";
            url = "http://3wa.local/PHP/PHP4/exo_prepa_qcm/third_validation.php?pass=" + password;
            console.log(url);

            var get = $.ajax({
              url: "http://3wa.local/PHP/PHP4/exo_prepa_qcm/third.php",
              data:{password: password},
              success: function(data) {
              console.log(data);
              var password2 = "707916a3bc09b9c8edbbaa05e46e8ec2f93136d4dedf25e7217c3d8b890a515dedcf01dfc8d7336e02a770a3986e330be0e2d746c13ec5896d4588fec6dbaadb";
              var url2 ="http://3wa.local/PHP/PHP4/exo_prepa_qcm/third_validation.php?pass=" + password2;
              console.log(url2);
              }
            });


        </script>

    </body>
</html>
