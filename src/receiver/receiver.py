from receiver_function import *

def compute_statistics(path_to_received_file):
    statistics_dict = {}
    (list_of_temp_values, list_of_soc_values) = get_data_list_from_file(path_to_file=path_to_received_file)
    min_temp = find_min(list_of_readings=list_of_temp_values)
    max_temp = find_max(list_of_readings=list_of_temp_values)
    min_soc = find_min(list_of_readings=list_of_soc_values)
    max_soc = find_max(list_of_readings=list_of_soc_values)
    temp_moving_avg = find_simple_moving_average(list_of_readings=list_of_temp_values, elements_from_last=5)
    soc_moving_avg = find_simple_moving_average(list_of_readings=list_of_soc_values, elements_from_last=5)
    statistics_dict = {
        'min_temp': min_temp,
        'max_temp': max_temp,
        'min_soc': min_soc,
        'max_soc': max_soc,
        'temp_moving_avg': temp_moving_avg,
        'soc_moving_avg': soc_moving_avg
    }
    return statistics_dict

def print_to_console(statistics_dict):
    print(statistics_dict)

print_to_console(compute_statistics(path_to_received_file="output.txt"))