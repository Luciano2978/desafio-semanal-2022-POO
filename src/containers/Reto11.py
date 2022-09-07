#Crea una función que reciba dos cadenas como parámetro (str1, str2)
# e imprima otras dos cadenas como salida (out1, out2).
# - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2. - 
# out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.

str1="hola"
str2="chau"


def fn_interc(p1,p2):
    lst=[]
    lst2=[]
    var_guion="-"
    
    for i in p1:
        if i not in p2:
            lst.append(i)
            out1= var_guion.join(lst)
    print(f"el out 1 es {out1}")
    for i in p2:
        if i not in p1:
            lst2.append(i)
            out2= var_guion.join(lst2)
    print(f"el out 2 es {out2}")
               
fn_interc(str1,str2)