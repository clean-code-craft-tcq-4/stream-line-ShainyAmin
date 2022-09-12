import json


def find_min(list_of_readings):
    return min(list_of_readings)


def find_max(list_of_readings):
    return max(list_of_readings)


def find_simple_moving_average(list_of_readings, elements_from_last):
    new_list = list_of_readings[-elements_from_last:]
    return sum(new_list)/len(new_list)


def get_data_list_from_file(path_to_file):
    with open(path_to_file) as fs:
        data = fs.read()
    output = json.loads(data)
    senderTmpReadingsArr = output["jsonObject"]["senderTemperatureReadings"]
    senderSOCReadingsArr = output["jsonObject"]["senderSOCReadings"]
    return (senderTmpReadingsArr, senderSOCReadingsArr)
