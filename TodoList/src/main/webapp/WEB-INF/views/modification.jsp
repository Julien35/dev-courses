<%@ page language="java" contentType="text/html; charset=ISO-8859-1" isELIgnored="false"
    pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

        <form:form method="post" modelAttribute="modification" action="modifierModificationToDoList">
            <table border="1">
                <thead>
                    <tr>
                        <th><spring:message code="colonne.identifiant"/></th>
                        <th><spring:message code="colonne.libelle"/></th>
                    </tr>
                </thead>
                <tbody> 
<!--                 Modification d'un objet toDolist -->
                    <c:forEach items="${modification.toDoList}" var="todolist" varStatus="status">
                        <tr>
                            <td>
                                <c:out value="${todolist.id}"/>
                                <input type="hidden" name="toDoList[${status.index}].id" value="${todolist.id}"/>
                            </td>
                            <td>
                            	<c:out value="${todolist.libelle}"/>
                                <input type="text" name="toDoList[${status.index}].libelle" value="${todolist.libelle}"/><br/>
                            </td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
            <input type="submit"/>
        </form:form>
