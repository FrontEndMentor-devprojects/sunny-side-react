import React from 'react'
import milkBottlesSm from '../images/mobile/image-gallery-milkbottles.jpg'
import milkBottlesMd from '../images/desktop/image-gallery-milkbottles.jpg'
import orangeSliceSm from '../images/mobile/image-gallery-orange.jpg'
import orangeSliceMd from '../images/desktop/image-gallery-orange.jpg'
import coneSm from '../images/mobile/image-gallery-cone.jpg'
import coneMd from '../images/desktop/image-gallery-cone.jpg'
import sugarCubesSm from '../images/mobile/image-gallery-sugar-cubes.jpg'
import sugarCubesMd from '../images/desktop/image-gallery-sugar-cubes.jpg'

export default function Gallery() {
    return (
        <section className="flex flex-wrap">
            <picture className="w-1/2 md:w-1/4">
                <source media="(min-width:465px)" srcSet={milkBottlesMd} />
                <img src={milkBottlesSm} alt="" />
            </picture>
            <picture className="w-1/2 md:w-1/4">
                <source media="(min-width:465px)" srcSet={orangeSliceMd} />
                <img src={orangeSliceSm} alt="" />
            </picture>
            <picture className="w-1/2 md:w-1/4">
                <source media="(min-width:465px)" srcSet={coneMd} />
                <img src={coneSm} alt="" />
            </picture>
            <picture className="w-1/2 md:w-1/4">
                <source media="(min-width:465px)" srcSet={sugarCubesMd} />
                <img src={sugarCubesSm} alt="" />
            </picture>
        </section>
    )
}
