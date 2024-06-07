/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Stream as PrismaStream,
  Message as PrismaMessage,
  PeerConnection as PrismaPeerConnection,
  User as PrismaUser,
} from "@prisma/client";

export class StreamServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.StreamCountArgs, "select">): Promise<number> {
    return this.prisma.stream.count(args);
  }

  async streams<T extends Prisma.StreamFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.StreamFindManyArgs>
  ): Promise<PrismaStream[]> {
    return this.prisma.stream.findMany<Prisma.StreamFindManyArgs>(args);
  }
  async stream<T extends Prisma.StreamFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.StreamFindUniqueArgs>
  ): Promise<PrismaStream | null> {
    return this.prisma.stream.findUnique(args);
  }
  async createStream<T extends Prisma.StreamCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StreamCreateArgs>
  ): Promise<PrismaStream> {
    return this.prisma.stream.create<T>(args);
  }
  async updateStream<T extends Prisma.StreamUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.StreamUpdateArgs>
  ): Promise<PrismaStream> {
    return this.prisma.stream.update<T>(args);
  }
  async deleteStream<T extends Prisma.StreamDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.StreamDeleteArgs>
  ): Promise<PrismaStream> {
    return this.prisma.stream.delete(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<PrismaMessage[]> {
    return this.prisma.stream
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }

  async findPeerConnections(
    parentId: string,
    args: Prisma.PeerConnectionFindManyArgs
  ): Promise<PrismaPeerConnection[]> {
    return this.prisma.stream
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .peerConnections(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.stream
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
