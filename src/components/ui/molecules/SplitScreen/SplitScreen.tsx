import React from 'react'
import cn from 'classnames'

interface Props {
	classNames?: string;
	leftWidth: number;
  rightWidth: number;
	renderLeft: () => React.ReactNode;
  renderRight: () => React.ReactNode;
}

const SplitScreen = ({ classNames, leftWidth = 1, rightWidth = 1, renderLeft, renderRight }: Props) => {
  return (
    <div className={cn('flex flex-col lg:min-h-screen lg:flex-row', classNames)}>
      <div style={{ flex: leftWidth }}>{renderLeft()}</div>
      <div style={{ flex: rightWidth }}>{renderRight()}</div>
    </div>
  )
}

export default SplitScreen
