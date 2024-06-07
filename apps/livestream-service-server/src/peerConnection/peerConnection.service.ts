import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PeerConnectionServiceBase } from "./base/peerConnection.service.base";

@Injectable()
export class PeerConnectionService extends PeerConnectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
