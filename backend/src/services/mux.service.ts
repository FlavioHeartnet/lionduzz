import { Injectable } from '@nestjs/common';
import Mux from '@mux/mux-node';

@Injectable()
export class MuxService {
  private readonly mux: Mux;

  constructor() {
    this.mux = new Mux();
  }

  async createUploadUrl(): Promise<any> {
    return this.mux.video.uploads.create({
      new_asset_settings: { playback_policy: ['public'] },
      cors_origin: '*',
    });
  }
}
