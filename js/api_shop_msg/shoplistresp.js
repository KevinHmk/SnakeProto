/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.msg.ShopListResp');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.msg.ShopItem');

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
proto.msg.ShopListResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.msg.ShopListResp.repeatedFields_, null);
};
goog.inherits(proto.msg.ShopListResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.msg.ShopListResp.displayName = 'proto.msg.ShopListResp';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.msg.ShopListResp.repeatedFields_ = [1];



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
proto.msg.ShopListResp.prototype.toObject = function(opt_includeInstance) {
  return proto.msg.ShopListResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.msg.ShopListResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.ShopListResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.msg.ShopItem.toObject, includeInstance)
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
 * @return {!proto.msg.ShopListResp}
 */
proto.msg.ShopListResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.msg.ShopListResp;
  return proto.msg.ShopListResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.msg.ShopListResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.msg.ShopListResp}
 */
proto.msg.ShopListResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.msg.ShopItem;
      reader.readMessage(value,proto.msg.ShopItem.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.msg.ShopListResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.msg.ShopListResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.msg.ShopListResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.msg.ShopListResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.msg.ShopItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ShopItem Items = 1;
 * @return {!Array<!proto.msg.ShopItem>}
 */
proto.msg.ShopListResp.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.msg.ShopItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.msg.ShopItem, 1));
};


/** @param {!Array<!proto.msg.ShopItem>} value */
proto.msg.ShopListResp.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.msg.ShopItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.msg.ShopItem}
 */
proto.msg.ShopListResp.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.msg.ShopItem, opt_index);
};


proto.msg.ShopListResp.prototype.clearItemsList = function() {
  this.setItemsList([]);
};

