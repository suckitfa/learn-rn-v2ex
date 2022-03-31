import React from 'react'
import { View, Text, TextStyle, Pressable, ViewStyle } from 'react-native'
import { ITheme } from '@src/types'
import { SylCommon, useTheme } from '@src/theme'
import { translate } from '@src/i18n'

const NoFound = ({
  text,
  buttonText,
  buttonPress
}: {
  text?: string
  buttonText?: string
  buttonPress?: () => void
}) => {
  const { theme } = useTheme()

  const renderContent = () => {
    return (
      <View style={styles.notFoundTextWrap()}>
        <Text style={styles.notFoundText(theme)}>{text ?? translate('errors.noFound')}</Text>
        <Pressable onPress={buttonPress} style={[]}>
          <View style={styles.btnWrap(theme)}>
            <Text style={SylCommon.Button.textAction(theme)}>{buttonText}</Text>
          </View>
        </Pressable>
      </View>
    )
  }

  return (
    <>
      <View style={SylCommon.Layout.fill}>{renderContent()}</View>
    </>
  )
}

/**
 * @description styles settings
 */
const styles = {
  notFoundTextWrap: (): TextStyle => ({
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center'
  }),
  notFoundText: (theme: ITheme): TextStyle => ({
    ...theme.typography.bodyText,
    textAlign: 'center'
  }),
  btnWrap: (theme: ITheme): ViewStyle => ({
    // borderBottomWidth: 2,
    // borderRadius: 5,
    // height: 20,
    // borderColor: theme.colors.secondaryDark
  })
}

export default NoFound
