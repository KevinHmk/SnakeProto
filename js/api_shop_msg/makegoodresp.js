/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.msg.MakeGoodResp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.msg.ShopUserResp');
goog.require('proto.msg.SkinItem');

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
proto.msg.MakeGoodResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.msg.MakeGoodResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.msg.MakeGoodResp.displayName = 'proto.msg.MakeGoodResp';
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
proto.msg.MakeGoodResp.prototype.toObject = function(opt_includeInstance) {
  return proto.msg.MakeGoodResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.msg.MakeGoodResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.MakeGoodResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    skin: (f = msg.getSkin()) && proto.msg.SkinItem.toObject(includeInstance, f),
    shopmy: (f = msg.getShopmy()) && proto.msg.ShopUserResp.toObject(includeInstance, f)
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
 * @return {!proto.msg.MakeGoodResp}
 */
proto.msg.MakeGoodResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.msg.MakeGoodResp;
  return proto.msg.MakeGoodResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.msg.MakeGoodResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.msg.MakeGoodResp}
 */
proto.msg.MakeGoodResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.msg.SkinItem;
      reader.readMessage(value,proto.msg.SkinItem.deserializeBinaryFromReader);
      msg.setSkin(value);
      break;
    case 2:
      var value = new proto.msg.ShopUserResp;
      reader.readMessage(value,proto.msg.ShopUserResp.deserializeBinaryFromReader);
      msg.setShopmy(value);
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
proto.msg.MakeGoodResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.msg.MakeGoodResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.msg.MakeGoodResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.MakeGoodResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSkin();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.msg.SkinItem.serializeBinaryToWriter
    );
  }
  f = message.getShopmy();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.msg.ShopUserResp.serializeBinaryToWriter
    );
  }
};


/**
 * optional SkinItem Skin = 1;
 * @return {?proto.msg.SkinItem}
 */
proto.msg.MakeGoodResp.prototype.getSkin = function() {
  return /** @type{?proto.msg.SkinItem} */ (
    jspb.Message.getWrapperField(this, proto.msg.SkinItem, 1));
};


/** @param {?proto.msg.SkinItem|undefined} value */
proto.msg.MakeGoodResp.prototype.setSkin = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.msg.MakeGoodResp.prototype.clearSkin = function() {
  this.setSkin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.msg.MakeGoodResp.prototype.hasSkin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ShopUserResp ShopMy = 2;
 * @return {?proto.msg.ShopUserResp}
 */
proto.msg.MakeGoodResp.prototype.getShopmy = function() {
  return /** @type{?proto.msg.ShopUserResp} */ (
    jspb.Message.getWrapperField(this, proto.msg.ShopUserResp, 2));
};


/** @param {?proto.msg.ShopUserResp|undefined} value */
proto.msg.MakeGoodResp.prototype.setShopmy = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.msg.MakeGoodResp.prototype.clearShopmy = function() {
  this.setShopmy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.msg.MakeGoodResp.prototype.hasShopmy = function() {
  return jspb.Message.getField(this, 2) != null;
};

