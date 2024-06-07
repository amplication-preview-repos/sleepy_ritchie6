import * as graphql from "@nestjs/graphql";
import { PeerConnectionResolverBase } from "./base/peerConnection.resolver.base";
import { PeerConnection } from "./base/PeerConnection";
import { PeerConnectionService } from "./peerConnection.service";

@graphql.Resolver(() => PeerConnection)
export class PeerConnectionResolver extends PeerConnectionResolverBase {
  constructor(protected readonly service: PeerConnectionService) {
    super(service);
  }
}
