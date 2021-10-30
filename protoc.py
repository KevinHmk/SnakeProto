import os
import logging
import shutil
import time

path = "./proto/"
dirs = os.listdir(path)

for file in dirs:
    fdir = os.path.join(path, file)
    if os.path.isfile(fdir):
        if os.path.splitext(fdir)[1] == ".proto":
            subDir = os.path.splitext(os.path.basename(fdir))[0]
            jsSubDir = './js/' + subDir + '/'
            if os.path.isdir(jsSubDir):
                shutil.rmtree(jsSubDir)
            os.makedirs(jsSubDir)
            shutil.copyfile('./js/1.js', jsSubDir+'1.js')
            os.system('protoc '+file +
                      ' -I=.\proto\ --js_out='+jsSubDir)

os.system('gulp jsconcat')

# time.sleep(5)

def copy_dir(src_path, target_path):
	if os.path.isdir(src_path) and os.path.isdir(target_path):		
		filelist_src = os.listdir(src_path)							
		for file in filelist_src:
			path = os.path.join(os.path.abspath(src_path), file)	
			if os.path.isdir(path):
				path1 = os.path.join(os.path.abspath(target_path), file)	
				if not os.path.exists(path1):						
					os.mkdir(path1)
				copy_dir(path,path1)			
			else:								
				with open(path, 'rb') as read_stream:
					contents = read_stream.read()
					path1 = os.path.join(target_path, file)
					with open(path1, 'wb') as write_stream:
						write_stream.write(contents)
		return 	True	
						
	else:
		return False
        
copy_dir('./build','../../SnakeOff/assets/script/msg');