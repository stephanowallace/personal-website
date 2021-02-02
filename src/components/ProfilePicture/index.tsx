import React from 'react'
import styled from 'styled-components'

interface ProfilePictureProps {
  size?: PictureSize
}

const Image = styled.img`
  border-radius: 50%;
  width: ${({ size }: ProfilePictureProps) => size === 'medium' ? '200px' : '80px' }
`

const ProfilePicture: React.FC<ProfilePictureProps> = ({ size = 'medium' }) => {
  return (
    <Image
      src="https://igormiranda.com.br/wp-content/uploads/2020/07/95064691_1369034625.jpg"
      size={size}
    />
  )
}

export default ProfilePicture