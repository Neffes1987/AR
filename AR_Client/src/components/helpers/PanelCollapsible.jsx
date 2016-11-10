import React from 'react'

const PanelCollapsible = ({
    title = '',
    id = '',
    children,
    colapsed=false,
    onColapsed='',
    notSaved=false,
	link_id
}) => {
    let titleFormat = title.replace(/[.\s]+/g, '');
    return (
        <div id={id} className='panel-group' role='tablist'>
            <div className='panel panel-default'>
                <div className='panel-heading' role='tab' id={'collapseHeading'+titleFormat}>
                    <h4 className='panel-title'>
                        <a role='button'
							data-toggle='collapse'
							id={link_id}
							href={notSaved?'':'#collapseContent'+titleFormat}
							aria-expanded={colapsed}
							aria-controls={'#collapseContent'+titleFormat}
							className={colapsed?'':'collapsed'}
							onClick={(e)=>{
									if (!notSaved && e.target.attributes['aria-expanded'].value=='true')
											onColapsed!=''?onColapsed(id):false;
									if(notSaved) alert('Please, save data ferst.');
									}
							}
							>
                            {title}
                        </a>
                    </h4>
                </div>
                <div id={'collapseContent'+titleFormat} className={colapsed?'panel-collapse collapse in':'panel-collapse collapse'} role='tabpanel' aria-labelledby={'#collapseHeading'+titleFormat}>
                    <div className='panel-body'>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
};

export default PanelCollapsible
