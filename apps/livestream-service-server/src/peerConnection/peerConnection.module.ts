import { Module } from "@nestjs/common";
import { PeerConnectionModuleBase } from "./base/peerConnection.module.base";
import { PeerConnectionService } from "./peerConnection.service";
import { PeerConnectionController } from "./peerConnection.controller";
import { PeerConnectionResolver } from "./peerConnection.resolver";

@Module({
  imports: [PeerConnectionModuleBase],
  controllers: [PeerConnectionController],
  providers: [PeerConnectionService, PeerConnectionResolver],
  exports: [PeerConnectionService],
})
export class PeerConnectionModule {}
