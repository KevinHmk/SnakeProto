/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.msg.MsgVerifyLoginRet');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.msg.ErrorCode');
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
proto.msg.MsgVerifyLoginRet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.msg.MsgVerifyLoginRet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.msg.MsgVerifyLoginRet.displayName = 'proto.msg.MsgVerifyLoginRet';
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
proto.msg.MsgVerifyLoginRet.prototype.toObject = function(opt_includeInstance) {
  return proto.msg.MsgVerifyLoginRet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.msg.MsgVerifyLoginRet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.MsgVerifyLoginRet.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ec: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.msg.MsgVerifyLoginRet}
 */
proto.msg.MsgVerifyLoginRet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.msg.MsgVerifyLoginRet;
  return proto.msg.MsgVerifyLoginRet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.msg.MsgVerifyLoginRet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.msg.MsgVerifyLoginRet}
 */
proto.msg.MsgVerifyLoginRet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUid(value);
      break;
    case 2:
      var value = /** @type {!proto.msg.ErrorCode} */ (reader.readEnum());
      msg.setEc(value);
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
proto.msg.MsgVerifyLoginRet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.msg.MsgVerifyLoginRet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.msg.MsgVerifyLoginRet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.MsgVerifyLoginRet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEc();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional int64 UID = 1;
 * @return {number}
 */
proto.msg.MsgVerifyLoginRet.prototype.getUid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.msg.MsgVerifyLoginRet.prototype.setUid = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ErrorCode EC = 2;
 * @return {!proto.msg.ErrorCode}
 */
proto.msg.MsgVerifyLoginRet.prototype.getEc = function() {
  return /** @type {!proto.msg.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.msg.ErrorCode} value */
proto.msg.MsgVerifyLoginRet.prototype.setEc = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


