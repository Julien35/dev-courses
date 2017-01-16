<%@ page language="java" contentType="text/html; charset=ISO-8859-1" isELIgnored="false"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

        <table border="1">
            <thead>
                <tr>
                    <th><spring:message code="colonne.identifiant"/></th>
                    <th><spring:message code="colonne.libelle"/></th>
                </tr>
            </thead>
            <tbody>
<!--           La variable porte le nom de la variable du modèle dans le controller -->
                <c:forEach items="${affichertodolist}" var="todolist">
                    <tr>
                        <td><c:out value="${todolist.id}"/></td>
                        <td><c:out value="${todolist.libelle}"/></td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>