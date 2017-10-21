'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './myendpoint_message.events';

var MyendpointMessageSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

registerEvents(MyendpointMessageSchema);
export default mongoose.model('MyendpointMessage', MyendpointMessageSchema);
