/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.msg.ModeEndAwardConf');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.msg.ModeEndAwardConf = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.msg.ModeEndAwardConf, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.msg.ModeEndAwardConf.displayName = 'proto.msg.ModeEndAwardConf';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.msg.ModeEndAwardConf.prototype.toObject = function(opt_includeInstance) {
  return proto.msg.ModeEndAwardConf.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.msg.ModeEndAwardConf} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.ModeEndAwardConf.toObject = function(includeInstance, msg) {
  var f, obj = {
    boxgap: jspb.Message.getFieldWithDefault(msg, 1, 0),
    boxaward: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    boxnum: jspb.Message.getFieldWithDefault(msg, 3, 0),
    baselen: jspb.Message.getFieldWithDefault(msg, 4, 0),
    baseaward: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    steplen: jspb.Message.getFieldWithDefault(msg, 6, 0),
    stepaward: +jspb.Message.getFieldWithDefault(msg, 7, 0.0),
    maxaward: +jspb.Message.getFieldWithDefault(msg, 8, 0.0),
    daysteplen: jspb.Message.getFieldWithDefault(msg, 9, 0),
    daystepaward: +jspb.Message.getFieldWithDefault(msg, 10, 0.0),
    daymaxaward: +jspb.Message.getFieldWithDefault(msg, 11, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.msg.ModeEndAwardConf}
 */
proto.msg.ModeEndAwardConf.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.msg.ModeEndAwardConf;
  return proto.msg.ModeEndAwardConf.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.msg.ModeEndAwardConf} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.msg.ModeEndAwardConf}
 */
proto.msg.ModeEndAwardConf.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBoxgap(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBoxaward(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBoxnum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBaselen(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBaseaward(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSteplen(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStepaward(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxaward(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDaysteplen(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDaystepaward(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDaymaxaward(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.msg.ModeEndAwardConf.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.msg.ModeEndAwardConf.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.msg.ModeEndAwardConf} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.ModeEndAwardConf.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBoxgap();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getBoxaward();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getBoxnum();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBaselen();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getBaseaward();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getSteplen();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getStepaward();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getMaxaward();
  if (f !== 0.0) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = message.getDaysteplen();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getDaystepaward();
  if (f !== 0.0) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = message.getDaymaxaward();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
};


/**
 * optional int32 BoxGap = 1;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getBoxgap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setBoxgap = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional double BoxAward = 2;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getBoxaward = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setBoxaward = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int32 BoxNum = 3;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getBoxnum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setBoxnum = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 BaseLen = 4;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getBaselen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setBaselen = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional double BaseAward = 5;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getBaseaward = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setBaseaward = function(value) {
  jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional int32 StepLen = 6;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getSteplen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setSteplen = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double StepAward = 7;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getStepaward = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setStepaward = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional double MaxAward = 8;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getMaxaward = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 8, 0.0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setMaxaward = function(value) {
  jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional int32 DayStepLen = 9;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getDaysteplen = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setDaysteplen = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional double DayStepAward = 10;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getDaystepaward = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 10, 0.0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setDaystepaward = function(value) {
  jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional double DayMaxAward = 11;
 * @return {number}
 */
proto.msg.ModeEndAwardConf.prototype.getDaymaxaward = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 11, 0.0));
};


/** @param {number} value */
proto.msg.ModeEndAwardConf.prototype.setDaymaxaward = function(value) {
  jspb.Message.setProto3FloatField(this, 11, value);
};


