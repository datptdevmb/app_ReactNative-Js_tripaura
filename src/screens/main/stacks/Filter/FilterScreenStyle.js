import {StyleSheet} from 'react-native';
import colors from '../../../../constants/Icons';
import fontsize from '../../../../constants/fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    color: '#006FFD',
    fontSize: 12,
    fontWeight: '600',
  },
  headerTextLoc: {
    color: '#1f2024',
    fontSize: 12,
    fontWeight: '700',
  },
  dropdownContainer: {
    height: 50,
    borderColor: '#007bff',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: '#555',
    flex: 1,
  },
  dropdownList: {
    maxHeight: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  applyButton: {
    backgroundColor: '#006FFD',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 16,
    height: 16,
  },
  containerbuttonFilter: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
