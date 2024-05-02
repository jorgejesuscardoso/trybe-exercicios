class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name
    
    def __str__(self):
        return f"Employee {self.id_num} está matriculado com o nome {self.name}"

class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10
    
    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for i in self._buckets[address]:
            if i.id_num == id_num:
                return i.name
        return None
    
    def has_value(self, id_num):
        address = self.get_address(id_num)
        for i in self._buckets[address]:
            if i.id_num == id_num:
                print(f"O funcionário com o id número: {id_num} está matriculado com o nome {i.name}")
                return True
        return False
    
    def update_value(self, id, new_name):
        address = self.get_address(id)
        old_name = self.get_value(id)
        insert = self.insert(Employee(address, new_name))
        print(f"O nome {old_name} foi alterado para {new_name}")
        return insert
    
employeed = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4"), (24, "name4")]
hasMap = HashMap()
for id_num, name in employeed:
    hasMap.insert(Employee(id_num, name))

print(hasMap.has_value(14))