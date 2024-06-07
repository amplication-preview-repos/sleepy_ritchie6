import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PeerConnectionService } from "./peerConnection.service";
import { PeerConnectionControllerBase } from "./base/peerConnection.controller.base";

@swagger.ApiTags("peerConnections")
@common.Controller("peerConnections")
export class PeerConnectionController extends PeerConnectionControllerBase {
  constructor(protected readonly service: PeerConnectionService) {
    super(service);
  }
}
