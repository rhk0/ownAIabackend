import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";

export const listUsers = async (req: Request, res: Response) => {
  if (req.user.role !== "Admin") return res.status(403).json({ message: "Access denied" });

  const { search, country } = req.query;
  let users = await userRepository.find();

  if (search) {
    users = users.filter((user) => user.name.includes(search as string) || user.email.includes(search as string));
  }
  if (country) {
    users = users.filter((user) => user.country === country);
  }

  res.json(users);
};

export const getUserDetails = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (req.user.role !== "Admin" && req.user.id != id)
    return res.status(403).json({ message: "Access denied" });

  const user = await userRepository.findOne({ where: { id: Number(id) } });
  if (!user) return res.status(404).json({ message: "User not found" });

  res.json(user);
};
