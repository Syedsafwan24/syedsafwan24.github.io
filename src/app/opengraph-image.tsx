import { ImageResponse } from 'next/og';

export const alt = 'Syed Safwan Pirzade | Frontend Developer';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';
export const dynamic = 'force-static';

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					background: '#0D0D0D', // Very dark background
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					padding: '90px 100px',
					fontFamily: 'sans-serif',
				}}
			>
				{/* Top section: Name and Role */}
				<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '60px' }}>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						{/* Accent line */}
						<div
							style={{
								width: '4px',
								height: '56px',
								background: '#F0562E', // Accent color matching reference
								marginRight: '24px',
							}}
						/>
						<h1
							style={{
								fontSize: '84px',
								color: '#FFFFFF',
								margin: 0,
								fontWeight: 800,
								lineHeight: 1,
							}}
						>
							Syed Safwan
						</h1>
					</div>

					<p
						style={{
							fontSize: '32px',
							color: '#8A8A8A',
							margin: '20px 0 0 28px', // Align with the text, offset accent line
							fontWeight: 500,
						}}
					>
						Frontend Developer
					</p>
				</div>

				<div
					style={{
						height: '1px',
						width: '100%',
						background: '#222222',
						marginBottom: '60px',
					}}
				/>

				{/* 3 Pills for Stats */}
				<div style={{ display: 'flex', gap: '20px', marginBottom: 'auto' }}>
					{[
						{ top: '1.5 yrs', bottom: 'Experience' },
						{ top: 'India', bottom: 'Based in' },
						{ top: 'Available', bottom: 'Status' },
					].map((stat, i) => (
						<div
							key={i}
							style={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								background: '#18181A', // Slightly lighter dark box
								padding: '24px 32px',
								borderRadius: '16px',
								minWidth: '220px',
							}}
						>
							<span
								style={{
									color: '#FFFFFF',
									fontSize: '28px',
									fontWeight: 600,
									marginBottom: '6px',
								}}
							>
								{stat.top}
							</span>
							<span style={{ color: '#8A8A8A', fontSize: '20px', fontWeight: 500 }}>
								{stat.bottom}
							</span>
						</div>
					))}
				</div>

				{/* Bottom section: URL */}
				<div style={{ display: 'flex', alignItems: 'center', marginTop: 'auto' }}>
					<div
						style={{
							width: '10px',
							height: '10px',
							background: '#F0562E',
							borderRadius: '50%',
							marginRight: '16px',
						}}
					/>
					<span style={{ color: '#8A8A8A', fontSize: '22px', fontWeight: 500 }}>
						Frontend Portfolio
					</span>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
