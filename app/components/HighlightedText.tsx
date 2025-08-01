import React from 'react'

type HighlightedTextProps = {
  className?: string
  normalColor?: string
  highlightColor?: string
  textArray: string[]
}

export const HighlightedText = ({textArray, highlightColor="#23C45D", normalColor="#FFFFFF", className=""}: HighlightedTextProps) => {
  return (
    <p className={className}>
      {textArray.map((text, i) => (
        <span style={{ color: i % 2 ? highlightColor : normalColor}} key={i}>
          {text}
          {i + 1 === textArray.length ? "" : " "}
        </span>
      ))}
    </p>
  )
}
