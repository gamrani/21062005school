package com.school.api.batchs;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.ExitStatus;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.StepExecution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;

import com.school.api.entities.Line;

public class LinesReader implements Tasklet {

	private final Logger logger = LoggerFactory
		      .getLogger(LinesReader.class);
		 
		    private List<Line> lines;
		    private RWFile fu;
		 
		    public void beforeStep(StepExecution stepExecution) {
		        lines = new ArrayList<>();
		        fu = new RWFile(
		          "taskletsvschunks/input/tasklets-vs-chunks.csv");
		        logger.debug("Lines Reader initialized.");
		    }
		 
		    @Override
		    public RepeatStatus execute(StepContribution stepContribution, 
		      ChunkContext chunkContext) throws Exception {
		        Line line = fu.readLine();
		        while (line != null) {
		            lines.add(line);
		            logger.debug("Read line: " + line.toString());
		            line = fu.readLine();
		        }
		        return RepeatStatus.FINISHED;
		    }
		 
		    public ExitStatus afterStep(StepExecution stepExecution) {
		        fu.closeReader();
		        stepExecution
		          .getJobExecution()
		          .getExecutionContext()
		          .put("lines", this.lines);
		        logger.debug("Lines Reader ended.");
		        return ExitStatus.COMPLETED;
		    }

}
