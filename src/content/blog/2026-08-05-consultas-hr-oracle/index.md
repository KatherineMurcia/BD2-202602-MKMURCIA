---
title: "Consultas SQL — Esquema HR"
description: "Primer ejercicio en clase: consultas con JOIN sobre el esquema global HR de Oracle."
date: "Aug 05 2026"
category: "SQL"
---

Ejercicio realizado el 5 de agosto de 2026, trabajado en [Oracle Live SQL](https://livesql.oracle.com), usando como base el esquema global de Oracle **HR** (Human Resources).

## Consultas iniciales

```sql
SELECT * FROM HR.COUNTRIES;

SELECT * FROM HR.EMPLOYEES;
```

## 1. Nombre, apellido, salario, país y continente de los empleados de Europa

Dos formas de resolverlo: con `NATURAL JOIN` y con `JOIN ... ON` explícito.

```sql
SELECT EMP.FIRST_NAME || ' ' || EMP.LAST_NAME AS NOMBRE_COMPLETO,
       EMP.SALARY,
       COUN.COUNTRY_NAME,
       REG.REGION_NAME
FROM HR.EMPLOYEES EMP
NATURAL JOIN HR.DEPARTMENTS
NATURAL JOIN HR.LOCATIONS
NATURAL JOIN HR.COUNTRIES COUN
NATURAL JOIN HR.REGIONS REG
WHERE REGION_NAME = 'Europe';
```

```sql
SELECT E.FIRST_NAME || ' ' || E.LAST_NAME AS NOMBRE_COMPLETO,
       E.SALARY,
       C.COUNTRY_NAME,
       R.REGION_NAME
FROM HR.EMPLOYEES E
JOIN HR.DEPARTMENTS D ON E.DEPARTMENT_ID = D.DEPARTMENT_ID
JOIN HR.LOCATIONS L ON D.LOCATION_ID = L.LOCATION_ID
JOIN HR.COUNTRIES C ON L.COUNTRY_ID = C.COUNTRY_ID
JOIN HR.REGIONS R ON C.REGION_ID = R.REGION_ID
WHERE REGION_NAME = 'Europe';
```

## 2. Empleados cuya segunda letra del nombre sea "a"

```sql
SELECT E.FIRST_NAME || ' ' || E.LAST_NAME AS NOMBRE_COMPLETO
FROM HR.EMPLOYEES E
WHERE E.FIRST_NAME LIKE '_a%';
```

## 3. Nombre, apellido, fecha y cargos que ha tenido cada empleado

```sql
SELECT 
    E.FIRST_NAME AS NOMBRE,
    E.LAST_NAME AS APELLIDO,
    J.START_DATE AS FECHA_INICIO,
    O.JOB_TITLE AS CARGO
FROM HR.EMPLOYEES E
INNER JOIN HR.JOB_HISTORY J ON E.EMPLOYEE_ID = J.EMPLOYEE_ID
INNER JOIN HR.JOBS O ON J.JOB_ID = O.JOB_ID
ORDER BY APELLIDO;
```

Variante con subconsultas anidadas (`NATURAL JOIN` sobre subconsultas):

```sql
SELECT
    FIRST_NAME AS NOMBRE,
    LAST_NAME AS APELLIDO,
    START_DATE AS FECHA_INGRESO,
    JOB_TITLE AS CARGO
FROM HR.EMPLOYEES
NATURAL JOIN (
    SELECT EMPLOYEE_ID, START_DATE, JOB_TITLE
    FROM HR.JOB_HISTORY
    NATURAL JOIN (
        SELECT JOB_ID, JOB_TITLE FROM HR.JOBS
    )
);
```

Variante con `LEFT JOIN`, filtrando solo cargos ya finalizados:

```sql
SELECT
    CONCAT(FIRST_NAME, LAST_NAME) AS NOMBRE,
    JH.START_DATE AS FECHA,
    J.JOB_TITLE
FROM HR.EMPLOYEES E
LEFT JOIN HR.JOB_HISTORY JH ON E.EMPLOYEE_ID = JH.EMPLOYEE_ID
LEFT JOIN HR.JOBS J ON JH.JOB_ID = J.JOB_ID
WHERE JH.END_DATE IS NOT NULL;
```