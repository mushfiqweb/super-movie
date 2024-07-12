import type { CommonProps } from '@/@types/common'
import Spinner from '@/components/ui/Spinner'
import classNames from 'classnames'
import type { ElementType, ReactNode } from 'react'

interface BaseLoadingProps extends CommonProps {
    asElement?: ElementType
    customLoader?: ReactNode
    loading: boolean
    spinnerClass?: string
}

interface LoadingProps extends BaseLoadingProps {
    type?: 'default' | 'cover'
}

const DefaultLoading = (props: BaseLoadingProps) => {
    const {
        loading,
        children,
        spinnerClass,
        className,
        asElement: Component = 'div',
        customLoader,
    } = props

    return loading ? (
        <Component
            className={classNames(
                !customLoader && 'flex items-center justify-center h-full',
                className
            )}
        >
            {customLoader ? (
                <>{customLoader}</>
            ) : (
                <Spinner className={spinnerClass} size={40} />
            )}
        </Component>
    ) : (
        <>{children}</>
    )
}

const CoveredLoading = (props: BaseLoadingProps) => {
    const {
        loading,
        children,
        spinnerClass,
        className,
        asElement: Component = 'div',
        customLoader,
    } = props

    return (
        <Component className={classNames(loading ? 'relative' : '', className)}>
            {children}
            {loading && (
                <div className="w-full h-full bg-white dark:bg-gray-800 dark:bg-opacity-60 bg-opacity-50 absolute inset-0" />
            )}
            {loading && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    {customLoader ? (
                        <>{customLoader}</>
                    ) : (
                        <Spinner className={spinnerClass} size={40} />
                    )}
                </div>
            )}
        </Component>
    )
}


const Loading: React.FC<LoadingProps> = ({
    asElement = 'div',
    customLoader,
    loading = false,
    spinnerClass,
    type = 'default',
    className,
    ...rest
}) => {
    const Element = asElement
    const classes = classNames(
        'flex items-center justify-center',
        type === 'cover' && 'absolute inset-0 bg-white/50',
        className
    )

    return (
        <Element className={classes} {...rest}>
            {loading && (
                <div
                    className={classNames(
                        'animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
                        spinnerClass
                    )}
                    style={{
                        width: '2em',
                        height: '2em',
                    }}
                />
            )}
            {customLoader}
        </Element>
    )
}

export default Loading
