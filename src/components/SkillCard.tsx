import classNames from 'classnames';

export interface SkillCardProps {
    title: string;
    className?: string;
	icon: string;
    skills: string[]
}

function SkillCard({ title, className, skills, icon }: SkillCardProps) {
	return (
		<div className='flex-1 text-center rounded-xl flex flex-col'>
			<div className={classNames(
				'text-xl capitalize p-6 font-bold rounded-t-xl border border-very-washed',
				'shadow-xl flex gap-4 justify-center',
				className
			)}>
				<img src={icon} alt='icon' aria-hidden="true" width={24} height={24} />
				{title}
			</div>
			<div className='p-6 rounded-b-xl bg-washed leading-7 flex justify-center items-center flex-1'>
				<ul>
					{skills.map((skill, i) => {
						return (
							<li key={i}>{skill}</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default SkillCard;

