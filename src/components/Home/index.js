import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainDiv,
  CardDiv,
  LeftDiv,
  LeftHeading,
  LeftImg,
  RightDiv,
  ToolUl,
  ToolLi,
  Button,
  TextArea,
} from './styledComponents'

class Home extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onChangeBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onChangeItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onChangeUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldLogo = isBold ? '#faff00' : '#f1f5f9'
    const italicLogo = isItalic ? '#faff00' : '#f1f5f9'
    const underlineLogo = isUnderline ? '#faff00' : '#f1f5f9'
    return (
      <MainDiv>
        <CardDiv>
          <LeftDiv>
            <LeftHeading>Text Editor</LeftHeading>
            <LeftImg
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </LeftDiv>
          <RightDiv>
            <ToolUl>
              <ToolLi>
                <Button
                  data-testid="bold"
                  colorText={boldLogo}
                  onClick={this.onChangeBold}
                >
                  <VscBold size={25} />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="italic"
                  colorText={italicLogo}
                  onClick={this.onChangeItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </ToolLi>
              <ToolLi>
                <Button
                  data-testid="underline"
                  colorText={underlineLogo}
                  onClick={this.onChangeUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ToolLi>
            </ToolUl>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </RightDiv>
        </CardDiv>
      </MainDiv>
    )
  }
}

export default Home
