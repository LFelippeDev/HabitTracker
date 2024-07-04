import {StyleSheet} from 'react-native';
import {colors} from '../../styles/theme';
import {server} from '../../../metro.config';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
});

export const HeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    color: colors.textPrimary,
    fontWeight: '700',
  },
});

export const SelectViewStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
  },
  button: {
    flex: 1,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  label: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '700',
  },
});

export const SelectPeriodStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    marginHorizontal: -16,
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    height: 35,
    paddingHorizontal: 16,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 1,
  },
  label: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '500',
  },
});

export const ObjectiveCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
    borderRadius: 8,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    zIndex: 1,
  },
  completeContainer: {
    position: 'absolute',
    height: 80,
    width: '50%',
    backgroundColor: colors.success,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
    borderRadius: 8,
  },
  completeContainerText: {
    fontSize: 24,
    color: colors.white,
  },
  skippedContainer: {
    flex: 1,
    position: 'absolute',
    height: 80,
    width: '50%',
    backgroundColor: colors.error,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 16,
    borderRadius: 8,
    paddingBottom: -16,
    right: 0,
  },
  skippedContainerText: {
    fontSize: 18,
    color: colors.white,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  emoji: {
    fontSize: 28,
    marginRight: 16,
  },
  checkedContainer: {
    height: 30,
    width: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedContainerText: {
    fontSize: 18,
    color: colors.white,
  },
});

export const DividerStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: colors.textSecondary,
    fontWeight: '700',
  },
  divider: {
    height: 1,
    marginLeft: 24,
    flex: 1,
    backgroundColor: colors.textSecondary,
  },
});

export const CardStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 16,
    padding: 16,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  emoji: {
    fontSize: 16,
    marginRight: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '300',
  },
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 16,
    backgroundColor: colors.border,
  },
});

export const WeeklyStyles = StyleSheet.create({
  daysContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayTitle: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '400',
    marginBottom: 8,
  },
  checkedContainer: {
    height: 30,
    width: 30,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedContainerText: {
    fontSize: 18,
  },
});

export const OverallStyles = StyleSheet.create({
  weekContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  weekContainerText: {
    fontSize: 10,
    color: colors.textPrimary,
    fontWeight: '300',
    width: 10,
  },
  checkedContainer: {
    height: 10,
    width: 10,
    backgroundColor: colors.background,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
