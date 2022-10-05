import { Request, Response } from 'express';

import prismaClient from '../../database/prismaClient';

class TeacherController {
    async store(request: Request, response: Response) {
        const { name, birth_date } = request.body;

        const teacher = await prismaClient.teacher.create({
            data: {
                name,
                birth_date,
            },
        });

        return response.status(201).json(teacher);
    }

    async index(request: Request, response: Response) {
        const teachers = await prismaClient.teacher.findMany();
        return response.status(200).json(teachers);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;
        const teacher = await prismaClient.teacher.findUnique({
            where: {
                id,
            },
        });

        return response.status(200).json(teacher);
    }

    async addClass(request: Request, response: Response) {
        const { id_classes } = request.body;
    }
}

export default new TeacherController();
