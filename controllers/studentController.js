'use strict';

const mysql = require('../database/db');

const getStudents = async (req, res, next) => {
    try {
        const students = await mysql.execute('SELECT * FROM employees');
        res.status(200).send(students[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getStudentById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await mysql.execute('SELECT * FROM employees WHERE id = ?', [id]);
        res.status(200).send(student[0]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addStudent = async (req, res, next) => {
    try {
        const data = req.body;
        const student = await mysql.execute(
            'INSERT INTO employees (first_name,last_name,email,phone,organization,designation,salary,status,is_deleted,created_at) VALUES (?,?,?,?,?,?,?,?,?,?)',[
               data.first_name,
               data.last_name,
               data.email,
               data.phone,
               data.organization,
               data.designation,
               data.salary,
               data.status,
               data.is_deleted,
               data.created_at
            ]);
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updateStudent = await mysql.execute('UPDATE employees SET first_name = ?,last_name = ?,email = ?,phone = ?,organization = ?,designation = ?,salary = ?,status = ?,is_deleted =? WHERE id = ?',
        [
            data.first_name,
            data.last_name,
            data.email,
            data.phone,
            data.organization,
            data.designation,
            data.salary,
            data.status,
            data.is_deleted,
            id
        ]);
        res.status(200).send(updateStudent);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        const student = await mysql.execute('DELETE FROM employees WHERE id = ?', [id]);
        res.status(200).send(student);
    } catch (error) {
        res.status(200).send(error.message);
    }
}

module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
}