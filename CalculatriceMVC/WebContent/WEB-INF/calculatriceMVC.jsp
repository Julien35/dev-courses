<%@ page pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>calculatriceMVC</title>
</head>
<body>

	<p><c:out value="${ !empty (afficherResultat) ? afficherResultat : '' }"/></p>
		
	<%-- Variable pour les tests --%>
<%-- 	<p>${ afficherTest }</p> --%>
	 

	<p>
	<form method="post" action="calcul">
		<input name="nombre1" type="number" /> 
		
		<select name="operande">
			<option value="addition">+</option>
			<option value="soustraction">-</option>
			<option value="multiplication">*</option>
			<option value="division">/</option>
		</select> 
				
		<input name="nombre2" type="number" /> 
		
		<input type="submit" value="Envoyer" />

	</form>

	<p />

</body>
</html>