/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.msg.ShopItem');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.msg.EnShopType');
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
proto.msg.ShopItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.msg.ShopItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.msg.ShopItem.displayName = 'proto.msg.ShopItem';
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
proto.msg.ShopItem.prototype.toObject = function(opt_includeInstance) {
  return proto.msg.ShopItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.msg.ShopItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.ShopItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    shopid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    skinid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    shoptype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    shopname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    shopicon: jspb.Message.getFieldWithDefault(msg, 5, ""),
    gold: +jspb.Message.getFieldWithDefault(msg, 6, 0.0),
    goldbig: +jspb.Message.getFieldWithDefault(msg, 7, 0.0),
    source: jspb.Message.getFieldWithDefault(msg, 8, ""),
    skillid: jspb.Message.getFieldWithDefault(msg, 9, 0)
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
 * @return {!proto.msg.ShopItem}
 */
proto.msg.ShopItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.msg.ShopItem;
  return proto.msg.ShopItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.msg.ShopItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.msg.ShopItem}
 */
proto.msg.ShopItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setShopid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSkinid(value);
      break;
    case 3:
      var value = /** @type {!proto.msg.EnShopType} */ (reader.readEnum());
      msg.setShoptype(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setShopname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setShopicon(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGold(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGoldbig(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSource(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSkillid(value);
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
proto.msg.ShopItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.msg.ShopItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.msg.ShopItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.ShopItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getShopid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSkinid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getShoptype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getShopname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getShopicon();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getGold();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = message.getGoldbig();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getSource();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSkillid();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
};


/**
 * optional int32 ShopId = 1;
 * @return {number}
 */
proto.msg.ShopItem.prototype.getShopid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.msg.ShopItem.prototype.setShopid = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 SkinID = 2;
 * @return {number}
 */
proto.msg.ShopItem.prototype.getSkinid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.msg.ShopItem.prototype.setSkinid = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional EnShopType shopType = 3;
 * @return {!proto.msg.EnShopType}
 */
proto.msg.ShopItem.prototype.getShoptype = function() {
  return /** @type {!proto.msg.EnShopType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.msg.EnShopType} value */
proto.msg.ShopItem.prototype.setShoptype = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string ShopName = 4;
 * @return {string}
 */
proto.msg.ShopItem.prototype.getShopname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.msg.ShopItem.prototype.setShopname = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ShopIcon = 5;
 * @return {string}
 */
proto.msg.ShopItem.prototype.getShopicon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.msg.ShopItem.prototype.setShopicon = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional double Gold = 6;
 * @return {number}
 */
proto.msg.ShopItem.prototype.getGold = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.msg.ShopItem.prototype.setGold = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional double GoldBig = 7;
 * @return {number}
 */
proto.msg.ShopItem.prototype.getGoldbig = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 7, 0.0));
};


/** @param {number} value */
proto.msg.ShopItem.prototype.setGoldbig = function(value) {
  jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string Source = 8;
 * @return {string}
 */
proto.msg.ShopItem.prototype.getSource = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.msg.ShopItem.prototype.setSource = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 Skillid = 9;
 * @return {number}
 */
proto.msg.ShopItem.prototype.getSkillid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.msg.ShopItem.prototype.setSkillid = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};

