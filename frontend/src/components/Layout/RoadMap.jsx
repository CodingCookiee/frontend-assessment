import React from 'react';
import { roadmapPhases } from '../../constants';
import RoadmapCard from '../ui/RoadmapCard';

const RoadMap = () => {
    return (
        <section className="w-full py-16">
            {/* Title and Subtitle */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4" style={{ color: '#FD1640' }}>
                    Roadmap
                </h2>
                <p className="text-xl text-gray-300">
                    Guiding the fusion of culture, AI, and Web3 innovation
                </p>
            </div>

            {/* Timeline Container */}
            <div className="relative max-w-7xl mx-auto px-4">
                {/* Vertical Timeline Line */}
                <div 
                    className="absolute left-8 top-0 bottom-0 w-px border-l-2 border-dashed"
                    style={{ borderColor: '#FD1640' }}
                />

                {/* Phases */}
                <div className="space-y-24">
                    {roadmapPhases.map((phase, index) => (
                        <div key={phase.id} className="relative">
                            {/* Timeline Circle */}
                            <div 
                                className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2"
                                style={{ borderColor: '#FD1640' }}
                            />
                            
                            {/* Phase Card */}
                            <div className="ml-16">
                                <RoadmapCard
                                    phase={index + 1}
                                    title={phase.title}
                                    list={phase.list}
                                    image={phase.image}
                                    isImageRight={(index + 1) % 2 === 1} // Odd phases have image on right
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default RoadMap;
