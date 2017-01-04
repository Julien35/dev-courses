'use strict'; // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES **************************************** */
/*************************************************************************************************/


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

// console.log($('.editable'));
// console.log($('tr'));

//ready : attend le chargement complet de la page
// $(document).ready(function() {
//
//   $('tr').click(function(e) {
//
//     var i = 0;
//     var id = $(this).attr('id');
//     console.log(id);
//     // e.stopPropagation(); //<-------stop the bubbling of the event here
//     // var value = $('#' + id).html();
//     //
//     // console.log(id + i);
//
//     // updateVal('#' + id, value);
//
//   });
//
// });


function updateVal(currentEle, value) {
  console.log("Current Element is" + currentEle);
  $(currentEle).html('<input class="thVal" maxlength="4" type="text" width="2" value="0" />');
  $(".thVal").focus();
  $(".thVal").keyup(function(event) {
    if (event.keyCode == 13) {
      $(currentEle).html($(".thVal").val().trim());
      //$(currentEle).html($(".thVal").val().trim());
    }
  });

  $(document).click(function() { // you can use $('html')
    $(currentEle).html($(".thVal").val().trim());
  });
}



function updateTask(idToUpdate) {
    console.log("update", id);
    // $.post("insert.php")
}


function deleteTask(idToDelete) {
    console.log("delete : ", idToDelete);
    $.post("delete.php", {
        id: idToDelete
    }, function(data) {
        if (parseInt(data)) {
            // console.log("data : ", data);
            $("#row_" + idToDelete).css('display', 'none');
            //location.reload();
            // alert("tâche supprimée");
        } else {
            alert("error");
        }
    });
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/
