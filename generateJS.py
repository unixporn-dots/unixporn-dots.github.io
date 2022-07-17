import os
import yaml


jsfilecontent = 'const dotfiles = [\n'

for themedir in os.listdir("themes"):

    try:
        with open("themes/" + themedir + "/manifest.yaml", "r") as manifest:
            yaml_dict = yaml.safe_load(manifest)

            jsobject = '\t{\n'
            for key in yaml_dict:
                value = yaml_dict[key]
                if type(value) is list:
                    jsobject += '\t\t' + key + ': ' + str(value) + ',\n'

                elif type(value) is str: 
                    if key == 'title' or key == 'author' or key == 'description':
                        value = value.replace('"','\\\"').replace("'","\\\'") #Escape apostrophe and quotas in title author and description fields
                    jsobject += '\t\t' + key + ': "' + value + '",\n'

                else: 
                    raise Exception("YAML item not currently supported. Please implement a conversion YAML -> js object in this script.") 
            
            jsobject = jsobject[:-2] + '\n\t},\n' #-2 is to remove newline and comma from last added line
            jsfilecontent += jsobject

    except yaml.YAMLError as e:
        print(e)
    except Exception as e:
        print(e)
    except:
        pass

jsfilecontent = jsfilecontent[:-2] + '\n]' #-2 is to remove newline and comma from last added object

with open("dotfiles.js", "w") as jsfile:
    jsfile.write(jsfilecontent)

