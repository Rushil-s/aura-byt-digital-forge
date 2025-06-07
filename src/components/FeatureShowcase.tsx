import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles, Shield, Globe, Database, Code, BarChart3, ServerCog } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const features = [
	{
		title: 'Lightning Fast',
		icon: Zap,
		description: 'Enterprise-grade performance with optimized architectures that scale seamlessly with your business growth.',
	},
	{
		title: 'AI-Powered',
		icon: Cpu,
		description: 'Leverage cutting-edge artificial intelligence to automate processes and drive intelligent decision-making.',
	},
	{
		title: 'Enterprise Security',
		icon: Shield,
		description: 'Bank-level security protocols with end-to-end encryption and compliance with industry standards.',
	},
	{
		title: 'Global Scale',
		icon: Globe,
		description: 'Cloud-native solutions designed to operate efficiently across multiple regions and time zones.',
	},
	{
		title: 'Data Intelligence',
		icon: Database,
		description: 'Transform raw data into actionable insights with advanced analytics and real-time reporting.',
	},
	{
		title: 'Custom Solutions',
		icon: Code,
		description: 'Tailored software development that perfectly aligns with your unique business requirements.',
	},
];

export default function FeatureShowcase() {
	return (
		<section className="py-20 md:py-32 bg-background relative overflow-hidden">
			{/* Background decoration */}
			<div className="absolute inset-0">
				<div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />
				<div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 blur-3xl rounded-full" />
			</div>
			
			<div className="mx-auto w-full max-w-7xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-4xl text-center">
					<div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8 border border-primary/20">
						<Sparkles size={16} />
						Enterprise Features
					</div>
					<h2 className="text-5xl md:text-6xl font-bold tracking-wide text-balance mb-8">
						Power. Speed. <span className="gradient-text">Innovation</span>.
					</h2>
					<p className="text-muted-foreground text-xl tracking-wide text-balance leading-relaxed">
						Everything you need to build fast, secure, and scalable enterprise applications 
						that drive digital transformation and business growth.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.4}
					className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed border-border/50 sm:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden"
				>
					{features.map((feature, i) => (
						<div key={i} className="relative">
							<GlowingEffect
								spread={25}
								glow={true}
								disabled={false}
								proximity={60}
								inactiveZone={0.1}
								borderWidth={1}
								movementDuration={1.2}
							/>
							<FeatureCard feature={feature} />
						</div>
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}