import os
import logging
import shutil

os.system('protoc --go_out=build -I=./proto/ '+
'^./proto/error_code_msg.proto '+
'^./proto/global_define_msg.proto '+
'^./proto/Lobby_define_msg.proto '+
'^./proto/room_define_msg.proto '+
'^./proto/game_lami_msg.proto')
